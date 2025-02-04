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

FirstApp.defaultProps = {
    firstname: 'Relicary',
    subTitle: 'There is not subtitle',
    title: 'There is not title',
};