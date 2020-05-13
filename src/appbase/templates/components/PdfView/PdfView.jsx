import values from 'lodash/fp/values';
import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { withStyles } from '@material-ui/styles';
import {PdfHighlighter, Highlight, Popup, AreaHighlight } from "react-pdf-highlighter";

import { ML_URI } from '../../../../config';
import Loading from '../../../_common/Loading';
import { setVariableSelection } from '../../helpers';


// without setting up workers - sets fake worker and get "Uncaught SyntaxError: Unexpected token '<'"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styles = theme => {
    return ({
        paper: {
            padding: 0,
            marginBottom: 20,
        },
    });
};

const HighlightPopup = ({ comment }) =>
    comment.text ? (
        <div className="Highlight__popup">
            {comment.emoji} {comment.text}
        </div>
    ) : null;

/**
 * Component shows pdf document with 'react-pdf-highlighter' library.
 * Main magic is in 'selectionFinished' - there we get info about selected region, text and page number.
 * 'handleHighlightTransform' displays highlights.
 * When tried to write function instead of class - got error.
 * When tried to implement with 'PdfLoader' from "react-pdf-highlighter" - didn't work. So we did it manually with pdfjs.getDocument.
 *
 * @param {Object} document - contains all document info
 * @param {number} variableId - current variable that we going to work with.
 * @param {function} addVarRectContent - function that add current variable to list of variables
 * @param {Array} highlights - already selected variables in document
 * @param {Object} variables - list of document variables by id
 */

class PdfView extends Component {
    state = {
        numPages: null,
        pdfDocument: null,
    };

    componentDidMount() {
        pdfjs.getDocument(ML_URI + this.props.document.path).then(pdfDocument => {
            this.setState({
                pdfDocument: pdfDocument
            });

        }).catch((e) => '!!!error');
    }

    selectionFinished = (position, content, ...restProps) => {
        const { variableId, variables, addVarRectContent } = this.props;
        const { boundingRect, rects, pageNumber } = position;
        if (!variableId) {
            return
        }
        setVariableSelection({
            variableId, boundingRect, content, pageNumber, rects, variables, addVarRectContent
        });
    };

    updateHighlight(highlightId, position, content) {
        // console.log("Updating highlight", highlightId, position, content);

        // this.setState({
        //     highlights: this.state.highlights.map(h => {
        //         return h.id === highlightId
        //             ? {
        //                 ...h,
        //                 position: { ...h.position, ...position },
        //                 content: { ...h.content, ...content }
        //             }
        //             : h;
        //     })
        // });
    }

    handleHighlightTransform = (highlight, index, setTip, hideTip, viewportToScaled, screenshot, isScrolledTo ) => {

        const isTextHighlight = !Boolean(
            highlight.content && highlight.content.image
        );

        const component = isTextHighlight ? (
            <Highlight
                isScrolledTo={isScrolledTo}
                position={highlight.position}
                comment={highlight.comment}
            />
        ) : (
            <AreaHighlight
                highlight={highlight}
                onChange={boundingRect => {
                    this.updateHighlight(
                        highlight.id,
                        { boundingRect: viewportToScaled(boundingRect) },
                        { image: screenshot(boundingRect) }
                    );
                }}
            />
        );

        return (
            <Popup
                popupContent={<HighlightPopup {...highlight} />}
                onMouseOver={popupContent =>
                    setTip(highlight, highlight => popupContent)
                }
                onMouseOut={hideTip}
                key={index}
                children={component}
            />
        );
    };

    render() {
        const { pdfDocument } = this.state;
        const { variableId, highlights } = this.props;

        if (!pdfDocument) {
            return <Loading/>
        }

        return (
            <div style={
                !variableId
                    ? {
                        opacity: .8,
                        cursor: 'not-allowed',
                    }
                    : null
            }>
                <PdfHighlighter
                    pdfDocument={this.state.pdfDocument}
                    enableAreaSelection={event => event.altKey}
                    onSelectionFinished={this.selectionFinished}
                    scrollRef={() => null} // to avoid error in console
                    highlightTransform={this.handleHighlightTransform}
                    highlights={values(this.props.highlights)}
                />
            </div>
        )
    }
};

export default withStyles(styles)(PdfView);
