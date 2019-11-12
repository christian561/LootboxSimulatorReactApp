import { Popper } from 'react-popper';
 
class VirtualReference extends React.Component{
  getBoundingClientRect() {
    return {
      top: 10,
      left: 10,
      bottom: 20,
      right: 100,
      width: 90,
      height: 10,
    };
  }
 
  get clientWidth() {
    return this.getBoundingClientRect().width;
  }
 
  get clientHeight() {
    return this.getBoundingClientRect().height;
  }

 
// This is going to create a virtual reference element
// positioned 10px from top and left of the document
// 90px wide and 10px high
const virtualReferenceElement = new VirtualReference();
 
// This popper will be positioned relatively to the
// virtual reference element defined above
render (){
	return(
  <Popper referenceElement={virtualReferenceElement}>
    {({ ref, style, placement, arrowProps }) => (
      <div ref={ref} style={style} data-placement={placement}>
        Popper element
        <div ref={arrowProps.ref} style={arrowProps.style} />
      </div>
    )}
  </Popper>
  )
};
}
export default VirtualReference;