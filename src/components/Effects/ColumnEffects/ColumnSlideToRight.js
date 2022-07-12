import ColumnEffect from './ColumnEffect';
function ColumnSlideToRight(props) {
  const params = { ...props, 
    from: _ => {
        return { marginLeft: '-100%'};
    },
    to: _ => {
        return { marginLeft: '0' };
    },
  };
  return ColumnEffect(params);
}
   
export default ColumnSlideToRight;