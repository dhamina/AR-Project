import css from 'styled-jsx/css'
export default css `
.mainpopup{}
.overly{position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.8); z-index: 99999;}
.popupInner{position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%);margin:0 auto;z-index: 99999;width:100%;}
.innerElements{background-color: #fff; margin: 0 auto; border-radius:5px; box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);max-width: 700px; width: 100%;position:relative}
.clos{cursor:pointer;position: absolute; top:0; right:0; z-index: 999;width: 20px; height: 20px;transition: all .3s ease;}
.clos:before{position: absolute; left:10px; content: ' '; width:2px; background-color:#999;transform: rotate(45deg);}
.clos:before{height: 20px;top: -1px;}
.clos:after{height: 20px;top: -1px;}
.clos:after{position: absolute; left: 10px; content: ' '; width:2px; background-color:#999;transform: rotate(-45deg);}

img{max-width:100%;display:block}
@media(max-width:767px) {
    .innerElements{max-width:95%;}
}
`