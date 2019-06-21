export const ERROR = '@@react/ERROR';

export default (error) => ({
    payload: { error },
    type: ERROR,
})