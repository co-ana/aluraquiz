import QuizContainer from '../src/components/QuizContainer'
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import Footer from '../src/components/Footer'

import db from '../db.json'

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste os seus conhecimentos sobre Zelda e divirta-se criando o seu AluraQuiz!</p>
            <p>Diz aí seu nome pra jogar :)</p>
            <a>Jogar!</a>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h2>Quizes da Galera</h2>
          </Widget.Header>
          <Widget.Content>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão Alguma coisa fez:</p>
            <ul>
              <li>clebinhodj/showdomilhaoalura</li>
              <li>clebinhodj/showdomilhaoalura</li>
              <li>clebinhodj/showdomilhaoalura</li>
            </ul>
          </Widget.Content>
        </Widget>
        <GitHubCorner />
        <Footer />
      </QuizContainer>
    </QuizBackground>
  )
}
