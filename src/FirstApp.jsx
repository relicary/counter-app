import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, firstname }) => {

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ firstname }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};