import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, firstname }) => {

    return (
        <>
            <div data-testid="test-title">{ title }</div>
            {/*<h1>{ title }</h1>*/}
            <p>{ subTitle }</p>
            <p>{ firstname }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};
