import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';
import { P, Span } from './Text';

/**
 * Form field to display an input element with a label and errors. Uses [renderProps](https://reactjs.org/docs/render-props.html#using-props-other-than-render) to pass field props like 'name' and 'id' to child input.
 */
const StyledInputField = ({ children, label, htmlFor, error, success, disabled, ...props }) => (
  <Box {...props}>
    {label && (
      <P as="label" htmlFor={htmlFor} display="block" color="black.500" mb={1}>
        {label}
      </P>
    )}
    {children({ name: htmlFor, id: htmlFor, error: Boolean(error) || undefined, success, disabled })}
    {error && (
      <Span display="block" color="red.500" pt={2} fontSize="Tiny">
        {error}
      </Span>
    )}
  </Box>
);

StyledInputField.propTypes = {
  /** React component to wrap with the label and errors */
  children: PropTypes.func.isRequired,
  /** Show disabled state for field */
  disabled: PropTypes.bool,
  /** text to display below the input */
  error: PropTypes.string,
  /** the label's 'for' attribute to be used as the 'name' and 'id' for the input */
  htmlFor: PropTypes.string,
  /** text to display above the input */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Show success state for field */
  success: PropTypes.bool,
  /** All props from `Box` */
  ...Box.propTypes,
};

export default StyledInputField;
