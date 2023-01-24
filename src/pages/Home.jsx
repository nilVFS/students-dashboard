export default function Home() {
    return (
        <section id="home">
            <div className="home-content">
                <div className="home-header">
                    <div className="user-img-wrapper">
                        <img src="/homepage-bg.png" alt=""/>
                    </div>
                    <h2 className="home-username">Vladislav Nizjev</h2>
                    <p className="home-group-info">(EL-19)</p>
                </div>
                <h3 className="block-title">Activity</h3>
                <div className="home-activity">
                    <div className="activity-bar">
                        <img src="/icons/ico-1.svg" alt="" />
                        <h4>Lorem</h4>
                        <p>Lorem, ipsum.</p>
                        <p className="activity-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi labore harum.</p>
                    </div>
                    <div className="activity-bar">
                        <img src="/icons/ico-2.svg" alt="" />
                        <h4>Lorem</h4>
                        <p>Lorem, ipsum.</p>
                        <p className="activity-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi labore harum.</p>
                    </div>
                    <div className="activity-bar">
                        <img src="/icons/ico-3.svg" alt="" />
                        <h4>Lorem</h4>
                        <p>Lorem, ipsum.</p>
                        <p className="activity-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi labore harum.</p>
                    </div>
                </div>
                <h2 className="block-title">Latest</h2>
                <div className="home-activity">
                    <div className="activity-bar">
                        <img src="/icons/ico-4.svg" alt="" />
                        <h4>Lorem</h4>
                        <p>Lorem, ipsum.</p>
                        <p className="activity-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi labore harum.</p>
                    </div>
                    <div className="activity-bar">
                        <img src="/icons/ico-5.svg" alt="" />
                        <h4>Lorem</h4>
                        <p>Lorem, ipsum.</p>
                        <p className="activity-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi labore harum.</p>
                    </div>
                    <div className="activity-bar">
                        <img src="/icons/ico-6.svg" alt="" />
                        <h4>Lorem</h4>
                        <p>Lorem, ipsum.</p>
                        <p className="activity-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis modi labore harum.</p>
                    </div>
                </div>
            </div>
            <div className="home-feed">
                <h3 className="home-news-title">NEWS</h3>
                <div className="news">
                    <img className="news-img" src="https://images.unsplash.com/photo-1674047358507-e8cfe6de1335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                    <div className="news-content">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sapiente.</p>
                        <a href="#" className="news-btn">Подробнее</a>
                    </div>
                </div>
                <div className="news">
                    <img className="news-img" src="https://images.unsplash.com/photo-1673946723153-4994870b64e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                    <div className="news-content">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sapiente.</p>
                        <a href="#" className="news-btn">Подробнее</a>
                    </div>
                </div>
                <div className="news">
                    <img className="news-img" src="https://images.unsplash.com/photo-1673946417918-2bc6ec514e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                    <div className="news-content">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sapiente.</p>
                        <a href="#" className="news-btn">Подробнее</a>
                    </div>
                </div>
                <div className="news">
                    <img className="news-img" src="https://images.unsplash.com/photo-1673946289214-06a2221cef41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                    <div className="news-content">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sapiente.</p>
                        <a href="#" className="news-btn">Подробнее</a>
                    </div>
                </div>
                <div className="news">
                    <img className="news-img" src="https://images.unsplash.com/photo-1655397642647-5ba4b7ec8640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="" />
                    <div className="news-content">
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sapiente.</p>
                        <a href="#" className="news-btn">Подробнее</a>
                    </div>
                </div>
                
            </div>
        </section>
    )
}