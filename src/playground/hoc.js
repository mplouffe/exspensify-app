const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedContent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedContent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedContent => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedContent {...props} />
            ) : (
                <p>You are not authenticated!</p>
            )}
        </div>
    );
})
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);