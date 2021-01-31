import styled from 'styled-components'
// import db from '../../../db.json'

const QuizBackground = styled.div`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg };
  background-position: center;
  background-size: cover;
  flex: 1;
`

export default QuizBackground