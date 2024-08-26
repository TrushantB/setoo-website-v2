const SkypeLink = () => (
    <a
        href="skype:live:.cid.5afb42d5e6f83a1c?chat"
        target="_blank"
        rel="noopener noreferrer"
        // onClick={(e) => {
        //     if (!navigator.userAgent.includes('Skype')) {
        //         e.preventDefault();
        //         alert('Please open Skype and search for "your-skype-id" to chat with us.');
        //     }
        // }}
    >
        Set up a Skype meeting
    </a>
);

export default SkypeLink;