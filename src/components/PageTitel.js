import { useEffect } from "react";

const PageTitle = title => {
    useEffect(() => {
        document.title = title;
        // document.title = `${title} - SD Photographer`;
    }, [title])

};

export default PageTitle;
