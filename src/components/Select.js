import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Select from 'react-select'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import CancelIcon from '@material-ui/icons/Cancel'
import { emphasize } from '@material-ui/core/styles/colorManipulator'

import VList from 'components/visualized/List'

// const suggestions = [
//   { label: 'Afghanistan' },
//   { label: 'Aland Islands' },
//   { label: 'Albania' },
//   { label: 'Algeria' },
//   { label: 'American Samoa' },
//   { label: 'Andorra' },
//   { label: 'Angola' },
//   { label: 'Anguilla' },
//   { label: 'Antarctica' },
//   { label: 'Antigua and Barbuda' },
//   { label: 'Argentina' },
//   { label: 'Armenia' },
//   { label: 'Aruba' },
//   { label: 'Australia' },
//   { label: 'Austria' },
//   { label: 'Azerbaijan' },
//   { label: 'Bahamas' },
//   { label: 'Bahrain' },
//   { label: 'Bangladesh' },
//   { label: 'Barbados' },
//   { label: 'Belarus' },
//   { label: 'Belgium' },
//   { label: 'Belize' },
//   { label: 'Benin' },
//   { label: 'Bermuda' },
//   { label: 'Bhutan' },
//   { label: 'Bolivia, Plurinational State of' },
//   { label: 'Bonaire, Sint Eustatius and Saba' },
//   { label: 'Bosnia and Herzegovina' },
//   { label: 'Botswana' },
//   { label: 'Bouvet Island' },
//   { label: 'Brazil' },
//   { label: 'British Indian Ocean Territory' },
//   { label: 'Brunei Darussalam' },
// ].map(suggestion => ({
//   value: suggestion.label,
//   label: suggestion.label,
// }))

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 200
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 30
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit}px`,
    fontSize: 16
  },
  singleValue: {
    fontSize: 14,
    paddingLeft: 4
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 14,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
})

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}

function Control(props) {

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  )
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

function SingleValue(props) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  )
}

function MenuList(props) {
  return (
    <VList list={props.children} width={200} />
  )
}

const components = {
  Control,
  MenuList,
  MultiValue,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  ValueContainer,
}

class IntegrationReactSelect extends React.Component {
  state = {
    single: null,
    multi: null,
  }

  handleChange = name => option => {
    this.setState({
      [name]: option,
    })
    this.props.onSelect(option.value)
  }

  render() {
    const { classes, theme, suggestions } = this.props

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    }

    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            options={suggestions}
            components={components}
            value={this.state.single}
            onChange={this.handleChange('single')}
            placeholder="Search Languages"
          />
        </NoSsr>
      </div>
    )
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect)