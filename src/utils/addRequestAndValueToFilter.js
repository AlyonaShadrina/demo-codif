const addRequestAndValueToFilter = ({
    filterArr, makeRequest, requestOptions, managerUsersIds, ordinaryUsersIds, allUsers,
}) => filterArr.map((filter) => {
    if (filter.filterValue === 'filter[manager_id]') {
        return ({
            ...filter,
            makeRequest,
            value: requestOptions[filter.filterValue],
            updateOptionsOnRender: (options) => {
                if (managerUsersIds && allUsers) {
                    console.log('managerUsersIds', managerUsersIds);

                    const newOptions = managerUsersIds.map((id) => ({
                        value: allUsers[id].id,
                        text: `${allUsers[id].first_name} ${allUsers[id].last_name}`,
                    }));
                    return newOptions;
                }
                return options;
            },
        });
    }
    if (filter.filterValue === 'filter[user_id]') {
        return ({
            ...filter,
            makeRequest,
            value: requestOptions[filter.filterValue],
            updateOptionsOnRender: (options) => {
                if (ordinaryUsersIds && allUsers) {
                    const newOptions = ordinaryUsersIds.map((id) => ({
                        value: allUsers[id].id,
                        text: `${allUsers[id].first_name} ${allUsers[id].last_name}`,
                    }));
                    return newOptions;
                }
                return options;
            },
        });
    }
    return ({
        ...filter,
        makeRequest,
        value: requestOptions[filter.filterValue],
    });
});

export default addRequestAndValueToFilter;
