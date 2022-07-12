import ColumnEffect from './ColumnEffect';
function ColumnSlideToLeft(props) {
  const params = { ...props, 
    from: _ => {
        return { marginLeft: '100%'};
    },
    to: _ => {
        return { marginLeft: '0' };
    },
  };
  return ColumnEffect(params);
}
   
export default ColumnSlideToLeft;