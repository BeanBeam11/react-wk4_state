export default function HamMenu({onClick, isOnTouch}) {
    return (
        <>
            {isOnTouch ? (
                <span onClick={onClick} className="ham-menu show-mobile">
                    <div className="ham-menu-bar1 ham-menu-bar1--touch">___</div>
                    <div className="ham-menu-bar2 ham-menu-bar2--touch">___</div>
                    <div className="ham-menu-bar3 ham-menu-bar3--touch">___</div>
                </span>
            ):(
                <span  onClick={onClick} className="ham-menu show-mobile">
                    <div className="ham-menu-bar1">___</div>
                    <div className="ham-menu-bar2">___</div>
                    <div className="ham-menu-bar3">___</div>
                </span>
            )}
        </>
    );
}