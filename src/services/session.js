import Cookies from 'js-cookie'

export const setUserCookie = (session) => {
    Cookies.remove('sales_engine_userCookie');
    Cookies.set('sales_engine_userCookie', JSON.stringify(session), { expires: 15, path: '/' });
};

export const getUserCookie = () => {
    const sessionCookie = Cookies.get('sales_engine_userCookie');
    if (sessionCookie === undefined) return null;
    return JSON.parse(sessionCookie);
};

export const removeUserCookie = () => {
    Cookies.remove('sales_engine_userCookie');
};

