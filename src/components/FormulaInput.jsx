import { useState } from 'react';
import { TextField, Chip, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import useFormulaStore from '../store/useFormulaStore';
import useAutocomplete from '../api/useAutocomplete';

const FormulaInput = () => {
  const { formula, addToFormula, removeFromFormula } = useFormulaStore(
    (state) => ({
      formula: state.formula,
      addToFormula: state.addToFormula,
      removeFromFormula: state.removeFromFormula,
    })
  );

  const [inputValue, setInputValue] = useState('');

  const { data: suggestions } = useAutocomplete(inputValue);

  const handleAutocomplete = (event, newValue) => {
    if (newValue.length > formula.length) {
      const addedItem = newValue[newValue.length - 1];
      addToFormula({ type: 'variable', value: addedItem });
    }
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);

    const operands = ['+', '-', '*', '/', '^', '(', ')'];
    const isOperand = operands.includes(newInputValue);

    if (isOperand) {
      addToFormula({ type: 'operand', value: newInputValue });
      setInputValue('');
    }
  };

  const handleDeleteTag = (itemToDelete) => {
    const indexToDelete = formula.findIndex((item) => {
      if (typeof item === 'string') {
        return item === itemToDelete;
      } else {
        return item.value === itemToDelete;
      }
    });

    if (indexToDelete !== -1) {
      removeFromFormula(indexToDelete);
    }
  };

  return (
    <Box>
      <Autocomplete
        multiple
        freeSolo
        options={suggestions || []}
        getOptionLabel={(option) => (option.name ? option.name : option)}
        value={formula.map((item) =>
          item.type === 'variable' ? item.value : item.value
        )}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChange={handleAutocomplete}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip
                key={key}
                label={typeof option === 'string' ? option : option.name}
                {...tagProps}
                onDelete={() => handleDeleteTag(option)}
                style={{ marginRight: 5, marginBottom: 5 }}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label='Formula'
            variant='outlined'
            value={inputValue}
          />
        )}
      />
    </Box>
  );
};

export default FormulaInput;
