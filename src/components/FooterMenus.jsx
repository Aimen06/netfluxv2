function FooterMenus(props) {
    return (
        <div className="menu">
            <ul>
                {props.menu1.map(function (element) {
                    return(<li><a href="#">{element}</a></li>)
                })}
            </ul>
            <ul>
                {props.menu2.map(function (element) {
                    return(<li><a href="#">{element}</a></li>)
                })}
            </ul>
            <ul>
                {props.menu3.map(function (element) {
                    return(<li><a href="#">{element}</a></li>)
                })}
            </ul>
            <ul>
                {props.menu4.map(function (element) {
                    return(<li><a href="#">{element}</a></li>)
                })}
            </ul>
        </div>
    )
}

export default FooterMenus;