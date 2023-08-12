export default function Accordion({ id, title, content, open, toggleOpen }) {
  const style = {
    color: open ? "green" : "grey",
  };

  return (
    <div className='m-5 container-sm'>
      <div className='d-flex gap-2 border' onClick={toggleOpen} style={style}>
        <div>{id}</div>
        <div>{title}</div>
        <div>{open ? "-" : "+"}</div>
      </div>
      {open ? <div className='border p-2'>{content}</div> : ""}
    </div>
  );
}
