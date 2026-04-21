import "./styles.css";

export default function HomePage({ onStart }) {
  return (
    <div className="page">
      <div className="home-card">

        <div className="home-header">
          {/* <img src="/yelp-logo.png" alt="Yelp" className="yelp-logo" /> */}
          <h1 className="home-title">Yelpdle</h1>
          <p className="home-subtitle">
            Guess the Yelp location's star rating based off of its reviews!
          </p>
        </div>

        <div className="home-divider" />

        <div className="home-modes">

          <button className="mode-card" onClick={() => onStart("daily")}>
            <div className="mode-icon-wrap daily-icon">
              <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
                <rect x="3" y="4" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="8" cy="15" r="1.5" fill="white"/>
                <circle cx="12" cy="15" r="1.5" fill="white"/>
                <circle cx="16" cy="15" r="1.5" fill="white"/>
              </svg>
            </div>
            <div className="mode-info">
              <p className="mode-title">Daily Challenge</p>
              <p className="mode-desc">
                A new set of 5 Yelp locations every day
              </p>
            </div>
            <svg className="mode-arrow" viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M9 18l6-6-6-6" stroke="#908eff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="mode-card" onClick={() => onStart("infinite")}>
            <div className="mode-icon-wrap infinite-icon">
              <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
                <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="mode-info">
              <p className="mode-title">Casual</p>
              <p className="mode-desc">
                Keep guessing as long as you want
              </p>
            </div>
            <svg className="mode-arrow" viewBox="0 0 24 24" fill="none" width="18" height="18">
              <path d="M9 18l6-6-6-6" stroke="#908eff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

        <div className="home-divider" />
        <p className="home-footer">New daily challenge every day at midnight</p>

      </div>
    </div>
  );
}