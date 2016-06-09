/**
 * Created by jiaaobo on 16/5/19.
 * abjia 选择数量组件
 */


export  default class ChooseCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        };
    }

    componentDidMount(){

    }

    _updateCount(type){
        let ct = this.state.count;
        if(type == "add"){
            ct++;
        }
        else{
            ct--;
            if(ct < this.props.minCount){
                ct = this.props.minCount;
            }
        }

        this.setState({
            count : ct
        })
    }

    getCount(){
        return this.state.count;
    }

    render() {
        return (
            <section className="choose-count ib ">
                <div className="fx-row fx-row-center select-count">
                    <a href="javascript:void(0)" className="choose-count-delete-on ib" onClick={()=> {this._updateCount('-');}}>
                        <i className="ib img-delete-on"></i>
                    </a>
                    <div className="choose-count-content text-center fx-col-1 ">
                        {this.state.count}
                    </div>
                    <a href="javascript:void(0)" className="choose-count-add-on ib" onClick={()=> {this._updateCount('add');}}>
                        <img  className="img-add-on" src='data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAGxJREFU
                            OBHtlUEKACEIRTXmdHre5npObmzRBN+FOwMh7JOfVxYROFR1eoByelChmQmqdd3IiDPa3jhoNYp6
                            FOzdlL38YesyYeZZdXh8qXmmRcQ8zpX/TJXjfis272YcLMpQwH/eatN32YEb5ANTrRGnveaUmQAA
                            AABJRU5ErkJggg=='/>
                    </a>
                </div>
            </section>
        )
    }

}


ChooseCount.defaultProps={
    minCount: 1,
    maxCount : 9999,
    startCount : 1
};

/**
 * 属性检测
 * @type {{listData: *}}
 */
ChooseCount.propTypes = {
    startCount : React.PropTypes.number,
    minCount   :React.PropTypes.number,
    maxCount   :React.PropTypes.number
};
