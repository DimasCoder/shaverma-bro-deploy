import React, {Component} from 'react';
import "../App.css";

export default class FoodCard extends Component {


    state = {
        shaverma: this.props.shaverma,
        price: this.props.shaverma.priceMiddle,
        image: this.props.shaverma.image,
        name: this.props.shaverma.foodName,
        category: this.props.shaverma.category,
        recipe: this.props.shaverma.recipe,
        priceMini: this.props.shaverma.priceMini,
        priceMiddle: this.props.shaverma.priceMiddle,
        priceMaxi: this.props.shaverma.priceMaxi,
        index: this.props.index,
        count: 1,
    }

    onChange = e => {
        this.setState({price: e.target.value})
    }


    plus = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    minus = () => {
        if (this.state.count > 1)
            this.setState({
                count: this.state.count - 1
            })
    };

    render() {
        const {price} = this.state;
        const {image} = this.state;
        const {category} = this.state;
        const {name} = this.state;
        const {recipe} = this.state;
        const {priceMini} = this.state;
        const {priceMiddle} = this.state;
        const {priceMaxi} = this.state;
        const {count} = this.state;
        const {shaverma} = this.state;
        return (
            <div className="food-card">
                <div className="product-img-div">
                    <img
                        src={image}
                        className="d-inline-block product-img"
                        alt="shaverma"
                    />
                </div>
                <div className="food-card-body">
                    <h3>{category} <span>{name}</span></h3>
                    <p>{recipe}</p>
                    <form className="radio-buttons">
                        {(priceMini !== 0) &&
                        <label className="btn-radio">
                            <input type="radio" value={priceMini}
                                   onChange={this.onChange}
                                   checked={price == priceMini}/>
                            <span>Mini</span>
                        </label>
                        }
                        <label className="btn-radio">
                            <input type="radio" value={priceMiddle} onChange={this.onChange}
                                   checked={price == priceMiddle}/>
                            <span>Middle</span>
                        </label>
                        <label className="btn-radio">
                            <input type="radio" value={priceMaxi} onChange={this.onChange}
                                   checked={price == priceMaxi}/>
                            <span>Maxi</span>
                        </label>
                        <div className="food-card-footer">
                            <strong>{price}₴</strong>
                            <div className="food-counter">
                                <button type="button" onClick={this.minus} className="btn-minus">
                                    -
                                </button>
                                <input type="text" min="1" value={count} className="btn-number"/>
                                <button type="button" className="btn-plus"
                                        onClick={this.plus}>
                                    +
                                </button>
                            </div>
                            <button type="button" onClick={() => this.props.addToCart(shaverma, price, count)}
                                    className="btn-wanted">Хочу!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
