import { Link } from "react-router-dom";
import "./AcHeader.css";

function AcHeader() {
    return (
        <header className="ac-header">
            <div className="ac-header-inner">
                {/* 왼쪽 로고 */}
                <div className="ac-logo-area">
                    <img
                        src="/images/너굴.jpg"
                        alt="logo"
                        className="ac-logo"
                    />
                    <span className="ac-logo-title">동물의 숲 도감</span>
                </div>

                {/* 오른쪽 메뉴 */}
                <nav className="ac-nav">
                    <Link to="/">홈</Link>
                    <Link to="/characters">주민 도감</Link>
                    <Link to="/add">캐릭터 추가</Link>
                </nav>
            </div>
        </header>
    );
}

export default AcHeader;
