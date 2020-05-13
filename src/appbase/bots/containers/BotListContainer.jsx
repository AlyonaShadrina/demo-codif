import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';

import Loading from '../../_common/Loading';
import BotList from '../components/BotList';
import * as selectors from '../state/selectors';


const BotListContainer = ({
    value, index, statusObj, match,
}) => {
    const { userId } = match.params;
    const bots = useSelector(selectors.bots);
    const botsIdList = useSelector(selectors.botsRoot)[statusObj.code];
    const loading = useSelector(selectors.botLoading);

    const [botList, setBotList] = useState([]);

    // get updates status type list
    useEffect(() => {
        if (!loading && bots && botsIdList.length > 0) {
            const list = botsIdList.map((id) => bots[id]);
            setBotList(list);
        } else {
            setBotList([]);
        }
    }, [botsIdList, loading]);

    if (loading) {
        return <Loading />;
    }

    return (
        <BotList
            botList={botList}
            value={value}
            index={index}
            userId={userId}
        />
    );
};

export default withRouter(BotListContainer);
