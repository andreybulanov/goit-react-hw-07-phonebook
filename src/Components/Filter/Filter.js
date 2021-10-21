import { connect } from 'react-redux';
import { Wrapper, Label, Input } from './Filter.styled';
import { filterContact } from '../../Store/actions';

const Filter = ({ value, onChange }) => (
  <Wrapper>
    <Label htmlFor="filter">Find contacts by name</Label>
    <Input type="text" name="filter" value={value} onChange={onChange} />
  </Wrapper>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
