function intialize() {

    document.addEventListener('DOMContentLoaded', function () {

        // Create link for Poppins font
        document.head.appendChild(
            Object.assign(document.createElement('link'), {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Poppins:100,regular'
            })
        );

        document.head.appendChild(
            Object.assign(document.createElement('script'), {
                crossorigin: 'anonymous',
                src: 'https://kit.fontawesome.com/0f0486bb75.js'
            })
        );

        // document.head.appendChild(
        //     Object.assign(document.createElement('link'), {
        //         rel: 'icon',
        //         href: './public/logo.svg',
        //         type: 'image/svg+xml'
        //     })
        // );


    });

}
intialize();