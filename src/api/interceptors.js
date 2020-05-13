import axios from 'axios';


export default {
    setupInterceptors: (store, history) => {
        axios.interceptors.response.use((response) => (
            response
        ), (error) => {
            const { status } = error.response;
            const isLoginPage = history.location.pathname === '/login';
            const isBotPage = history.location.pathname.match(/bots\/\d/);
            const isAdminPage = history.location.pathname.match(/admin/);

            const isFileRequest = error.response.config.url.match(/files\/\d/);

            if (isBotPage
                && (isFileRequest || (status !== 404 && status !== 401 && status !== 403))
            ) {
                console.log('There is error on Bot page');
            } else if (isAdminPage && (status !== 404 && status !== 401 && status !== 403)) {
                console.log('There is error on admin page');
            } else if (!isLoginPage) {
                history.push(`/error/${status}`);
            }

            return Promise.reject(error);
        });
    },
};
