import Form from 'react-bootstrap/Form';
const Search = props => {
    return (
        <>
        <Form.Control style={{width:200}} onChange={({ target: { value } }) => props.search(value)}
                      type="text"
                      placeholder="" />
        </>
    );
};
export default Search;