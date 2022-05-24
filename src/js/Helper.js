    //const  [zoom,setZoom] = useState(0);

    /*
    window.addEventListener("resize", getSizes, false);

    function getSizes() {
        setZoom((((window.outerWidth - 350) / window.innerWidth) * 100));
    }
    */
    const HmacSHA256 = require('crypto-js/hmac-sha256');

    export default function hash(password){

        /// Encrypt
        const cryptText = HmacSHA256(password, 'No está muerto lo que puede yacer eternamente, y con el paso de extraños eones, incluso la muerte puede morir').toString();
        console.log('CryptObj: ',cryptText);
        return cryptText;
    }