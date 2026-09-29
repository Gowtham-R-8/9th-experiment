import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />

            <main className="content">
                <Message
                    text="The only way to do great work is to love what you do."
                    name="Steve Jobs"
                />

                <Message
                    text="Code is like humor. When you have to explain it, it's bad."
                    name="Cory House"
                />

                <Message
                    text="First, solve the problem. Then, write the code."
                    name="John Johnson"
                />
            </main>

            <Footer />
        </div>
    );
}

export default App;