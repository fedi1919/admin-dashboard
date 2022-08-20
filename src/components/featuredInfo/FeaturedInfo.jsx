import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Produits</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Total: </span>
        </div>
        <span className="featuredSub">Some Dummy data</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Picklists</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Total: </span>
        </div>
        <span className="featuredSub">Some dummy data</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">US PickLists</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Total: </span>
        </div>
        <span className="featuredSub">Some dummy data</span>
      </div>
    </div>
  );
}
