import { Suspense } from "react";

const Custom404 = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        </Suspense>
    );
};

export default Custom404;
