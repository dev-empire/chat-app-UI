import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProfilePic from './ProfilePic'
import {
  Person,
  Phone,
  Face,
  Flag,
  SettingsApplications,
} from '@material-ui/icons'

const Profile = () => {
  return (
    <Body>
      <Left>
        <ProfilePic />
      </Left>
      <Div>
        <div>
          Name <Person fontSize="small" />
        </div>
        <div>
          Age <Face fontSize="small" />
        </div>
        <div>
          Country <Flag fontSize="small" />
        </div>
        <div>
          Phone <Phone fontSize="small" />
        </div>
        <Link to="/profile/settings">
          <H3>
            Go To Settings <SettingsApplications fontSize="large" />
          </H3>
        </Link>
      </Div>
    </Body>
  )
}

const Body = styled.div`
  height: 93.7vh;
  display: flex;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
const Div = styled.div`
  flex: 1;
  div {
    margin-top: 1.5rem;
    border: 1px #ccc solid;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 0.5rem;
    }
  }
`
const Left = styled.div`
  flex: 1;
  width: 30%;
`

const H3 = styled.h3`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 25px;
  color: ${({ theme }) => theme.primaryButton};
`

export default Profile
