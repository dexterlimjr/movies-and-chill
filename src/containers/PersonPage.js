import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { fetchPersonAsync } from '../actions/person'
import Loader from '../components/Loader'
import PersonCard from '../components/PersonCard'
import BackToHome from '../components/BackToHome'
import NotFound from '../components/_404'

class PersonPage extends PureComponent {
  componentDidMount() {
    const { dispatch, match } = this.props
    const { id } = match.params
    dispatch(fetchPersonAsync(id))
  }

  render() {
    const { classes, person, isLoading, error } = this.props

    if (error) return <NotFound />

    return (
      <div className={classes.container}>
        <BackToHome />
        <Loader isLoading={isLoading}>
          <PersonCard person={person} />
        </Loader>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 8,
  },
}

const mapStateToProps = ({ person }) =>
  ({
    person: person.get('result'),
    isLoading: person.get('isFetching'),
    error: person.get('error')
  })

export default connect(mapStateToProps)(withStyles(styles)(PersonPage))
