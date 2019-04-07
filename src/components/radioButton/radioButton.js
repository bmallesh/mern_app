import React, {Component} from 'react'


class RadioButton extends Component{
constructor(){
    super()

}

    render(){
        var data=this.props.data
        alert(this.props.checkButton)
        return(
            <div class="form-check">
            <label class="form-check-label" for="radio1">
                <input type={data.type} class={data.class} id={data.id} name={data.name} value={data.value} checked />Option 1
             </label>
             </div>
        )
    }
}
export default RadioButton;