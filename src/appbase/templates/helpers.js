import filter from 'lodash/fp/filter';
import keyBy from 'lodash/fp/keyBy';


export const formInintialTrainedValues = (document, templateVariablesId) => {
    let initialTrainedFields = {};
    let initialTrainedHighlights = {};

    if (
        document
        && document.trained
        && document.trained.length > 0
        && templateVariablesId
        // && template
    ) {
        const pages = document.trained[0].analysis.pages || [];

        Object.keys(pages).map((pageNum) => {
            const recognize = pages[pageNum].regions;
            const recognizeWithId = filter((o) => o.variable_id, recognize);
            const recognizeById = keyBy('variable_id', recognizeWithId);

            // console.log('recognizeWithId', recognizeWithId);
            // console.log('recognizeById', recognizeById);

            const { width } = pages[pageNum].meta;
            const { height } = pages[pageNum].meta;
            // console.log('pages[pageNum]', pages[pageNum]);


            templateVariablesId.map((variable, i) => {
                if (recognizeById[variable]) {
                    const varById = recognizeById[variable];
                    const varObj = {
                        [variable]: {
                            region: varById.coords,
                            text: varById.meta.text,
                            accuracy: varById.meta.accuracy,
                            page_num: pageNum,
                        },
                    };
                    const hightlightObj = {
                        [variable]: {
                            content: {
                                text: varById.meta.text,
                            },
                            position: {
                                boundingRect: {
                                    x1: varById.coords.x,
                                    y1: varById.coords.y,
                                    x2: varById.coords.x + varById.coords.w,
                                    y2: varById.coords.y + varById.coords.h,
                                    height,
                                    width,
                                },
                                rects: [{
                                    x1: varById.coords.x,
                                    y1: varById.coords.y,
                                    x2: varById.coords.x + varById.coords.w,
                                    y2: varById.coords.y + varById.coords.h,
                                    height,
                                    width,
                                }],
                                pageNumber: parseInt(pageNum),
                            },
                            comment: {
                                text: variable,
                            },
                            id: variable,
                        },
                    };

                    initialTrainedFields = {
                        ...initialTrainedFields,
                        ...varObj,
                    };
                    initialTrainedHighlights = {
                        ...initialTrainedHighlights,
                        ...hightlightObj,
                    };
                }

                // addVarRectContent(varObj, hightlightObj)
            });
        });
    }

    // console.log('---initialTrained', initialTrained);
    return {
        initialFields: initialTrainedFields,
        initialHighlights: initialTrainedHighlights,
    };
};

export const setTrainedVariables = ({
    pages, addVarRectContent, templateVariablesId,
}) => {
    Object.keys(pages).map((pageNum) => {
        const recognize = pages[pageNum].regions;
        const recognizeWithId = filter((o) => o.variable_id, recognize);
        const recognizeById = keyBy('variable_id', recognizeWithId);

        // console.log('recognizeWithId', recognizeWithId);
        // console.log('recognizeById', recognizeById);

        const { width } = pages[pageNum].meta;
        const { height } = pages[pageNum].meta;
        // console.log('pages[pageNum]', pages[pageNum]);

        templateVariablesId.map((variable, i) => {
            if (recognizeById[variable]) {
                const varById = recognizeById[variable];
                const varObj = {
                    [variable]: {
                        region: varById.coords,
                        text: varById.meta.text,
                        accuracy: varById.meta.accuracy,
                        page_num: pageNum,
                    },
                };
                const hightlightObj = {
                    [variable]: {
                        content: {
                            text: varById.meta.text,
                        },
                        position: {
                            boundingRect: {
                                x1: varById.coords.x,
                                y1: varById.coords.y,
                                x2: varById.coords.x + varById.coords.w,
                                y2: varById.coords.y + varById.coords.h,
                                height,
                                width,
                            },
                            rects: [{
                                x1: varById.coords.x,
                                y1: varById.coords.y,
                                x2: varById.coords.x + varById.coords.w,
                                y2: varById.coords.y + varById.coords.h,
                                height,
                                width,
                            }],
                            pageNumber: parseInt(pageNum),
                        },
                        comment: {
                            text: variable,
                        },
                        id: variable,
                    },
                };

                addVarRectContent(varObj, hightlightObj);
            }
        });
    });
};

export const setVariableSelection = ({
    variableId, boundingRect, content, pageNumber, rects, variables, addVarRectContent,
}) => {
    const varObj = {
        [variableId]: {
            region: {
                h: parseInt(boundingRect.y2 - boundingRect.y1),
                w: parseInt(boundingRect.x2 - boundingRect.x1),
                x: parseInt(boundingRect.x1),
                y: parseInt(boundingRect.y1),
            },
            text: content.text,
            page_num: pageNumber,
        },
    };
    const hightlightObj = {
        [variableId]: {
            content: {
                text: content.text,
            },
            position: {
                boundingRect,
                rects,
                pageNumber,
            },
            comment: {
                text: variables[variableId].name,
            },
            id: variableId,
        },
    };
    // console.log('hightlightObj', hightlightObj);
    // console.log('varObj', varObj);
    addVarRectContent(varObj, hightlightObj);
};

export const convertCoords = ({ document, varToEdit, ref }) => {
    const pageMeta = document.analysis.pages[varToEdit.page_num].meta;

    const { width } = pageMeta;

    const widthCoef = ref.current.querySelector('.textLayer').offsetWidth / width;

    varToEdit.region.x = Math.round(varToEdit.region.x / widthCoef);
    varToEdit.region.w = Math.round(varToEdit.region.w / widthCoef);
    varToEdit.region.y = Math.round(varToEdit.region.y / widthCoef);
    varToEdit.region.h = Math.round(varToEdit.region.h / widthCoef);
};
