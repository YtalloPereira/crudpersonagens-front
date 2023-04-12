export default class BlockButton extends React.Component{
    render(){
         return(
         <div className="d-grid gap-2">
             <button className = {this.props.className} > type={this.props.type}</button>
         </div>
         )
     }
 }