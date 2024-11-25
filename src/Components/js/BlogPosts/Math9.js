const Math9 = () => {
    return (
        <div>
            <h1>P vs. NP in Society, and Where AI Fits in</h1>
            <h3>A theory of computation enthusiast's view of P vs. NP and how the question connects to artificial intelligence</h3>
            <h2> P vs. NP in Simple Terms</h2>
            <p>Here’s my brief overview of the open question that’s at the heart of algorithmic problem solving:  Does P=NP?</p>
            <p>The class P consists of problems that can be solved in polynomial time. We refer to these problems as “tractable,” meaning they are easy to solve efficiently. Sorting, binary search, and finding shortest paths are problems in P. Famously, determining if a number is prime was also found to be in P in 2002.</p>
            <p>The class NP consists of problems that can be solved in nondeterministic polynomial time. In other words, if we are given a solution to the problem, we can check whether or not it’s correct in polynomial time. Standard methods in computability theory solve problems in NP by “nondeterministically” guessing all possible solutions in parallel (there are usually exponentially many of them) and checking whether they are correct. For example, SAT, the problem of determining whether a general boolean formula has a satisfying solution, is in NP. Given an assignment of True or False to each variable, we could easily check that it satisfies a boolean formula. However, it is difficult to directly find a correct assignment.</p>
            <p>A problem is NP-Hard if it is at least as difficult as all other problems in NP. You can think of NP-Hard problems as bordering the NP class and the exponential time class of problems (for which we cannot even verify solutions in polynomial time). NP-Complete problems are those that are both in NP and NP-hard. For example, SAT is NP-Complete. We could transform (or technically “reduce”) any problem in NP into a boolean formula, then solve it in the same way we solve SAT. If we wanted to, we could solve every problem in NP by reducing it to SAT, then solving SAT.</p>
            <p>We know that P is in NP. For any problem we can solve in polynomial time, we could also verify a solution to it in polynomial time. However, we don’t necessarily know that P and NP are not equal. That’s because we have yet to show that for all problems in NP, we cannot find a polynomial time algorithm.</p>
            <p>Quickly check for yourself that the following is true: If we were to provide a polynomial time algorithm for an NP-Complete problem, that would imply P=NP. Why? Because NP-Complete problems are the hardest ones in NP. If they can be solved in polynomial time, so can the easier problems in NP. We would do so using polynomial time reductions, through which we transform easier problems into harder problems, then solve the harder problems. Thus all problems in NP would have a polynomial time algorithm, and P=NP.</p>

            <h2>P vs. NP in Society</h2>
            <p>Ever since I learned about computability and complexity theory, I’ve continually unearthed the question of P vs. NP in completely different domains, making me realize how fundamental it is to our current computational abilities.</p>
            <p>I find the question beautiful in its difficulty. While it would be incredibly challenging to find a polynomial time algorithm for a problem we currently know to be NP-Complete, it may be even more challenging to prove such an algorithm does not exist at all. Of course, it depends on which claim is correct.</p>
            <p>The NP class seems to be representative of the tension between generation and verification we see in the real world. For many problems, it’s much harder to generate solutions than it is to verify they are correct. When doing homework, for example, it’s much easier to check the solution manual is correct than to find the answers in the first place. We can verify a mathematical proof in Lean, but it’s difficult to correctly prove theorems. When we code, we often iterate between generating and verifying programs: We write algorithms, test them, then debug them. In fact, program synthesis is an NP-Hard problem.</p>
            <p>In our everyday lives we solve small instances of NP-hard problems by trial and error. From these experiences, it seems natural that NP should be a distinct class from P. Yet, we may also just lack the intelligence, algorithmic skills, or correct programming language to solve these problems in polynomial time. At a meta level, a proof that P=NP (e.g. an algorithm solving an NP-Complete problem in polynomial time) is clearly very hard to generate, but seems like it would be easy to verify. We would just have to check that the algorithm solves the problem correctly and runs in polynomial time. It becomes paradoxical: the task of showing P=NP feels like a nondeterministic polynomial problem.</p>
            <p>Many of our advances in computation are centered around finding more efficient ways to solve NP-Complete and NP-hard problems. We have developed pretty efficient SAT solvers and effective approximation algorithms for Integer Linear Programs.  These approximation algorithms are deployed all around us, from scheduling systems to route-planners.</p>

            <h2>Where Artificial Intelligence Fits in to P vs. NP</h2>
            <p>Artificial intelligence and machine learning lie at the core of problem-solving. As a theory of computation enthusiast, here’s my take.</p>
            <p>I like to view recreating intelligence as building problem-solvers from scratch. We are trying to create artificially intelligent systems that are capable of finding algorithmic solutions to problems for us. These systems may have the advantage of leveraging more computational power for problem-solving than the human brain, but this is certainly an open question, because we don’t completely know how our brains work nor how to replicate them with artificial intelligence.</p>
            <p>For example, consider the overused example of x-ray analysis. As far as I know, we don’t yet have an algorithm for the true mapping from x-ray scans to diagnoses. Directly programming such an algorithm would be infeasible — we’d have to account for exponentially many combinations of pixel values. Modern supervised learning techniques offer a different path: Training an over-parametrized model to uncover the mapping between x-rays and diagnoses. The model potentially has the advantage of succinctly capturing the exponential combinations of pixel values that would be hard for us to code. It would replace the human problem-solver, in this case a doctor.</p>
            <p>Our current AI solutions to automating human problem-solving in domains such as medical diagnosis show a lot of promise, yet we cannot yet guarantee they are performing true algorithmic problem-solving. In fact, ML models seem to be masters of learning heuristics or shortcuts to problem-solving. In one infamous example, a seemingly successful model for x-ray diagnoses was revealed to be making its predictions from doctors’ pen marks — quite an effective shortcut.</p>
            <p>Let’s go back to P vs NP and the theory behind problem-solving. AI has the potential to discover new, more efficient algorithms for solving problems that we currently cannot code, such as x-ray diagnoses. Would it show P=NP by finding polynomial time algorithms for NP-Complete problems? Currently, not directly. Models themselves are rarely polynomial time algorithms. They are (1) extremely large, (2) not computationally efficient, and (3) often relying on heuristics. I could foresee AI being able to generate a proof or algorithm for P=NP, but it doesn’t seem that current tools are smart enough to do so.</p>
            <p>However, that doesn’t mean AI in its current state cannot be useful for more easily solving NP-hard problems. The heuristics of AI models could serve as new approximation algorithms. This is already the case in many settings where deep learning deployed. While we know our models are most often not trained to provide perfect automation or prediction, we verify that they are at least good enough at approximating the true mapping for deployment.</p>
            <p>AI can also be used as a generator for NP-hard problems. We often ask chat bots such as ChatGPT for ideas or recommendations throughout our problem-solving processes. ChatGPT generates potential solutions and we verify them, edit them, and use them however we’d like. That’s my new coding workflow, for example. When I’m stuck on a bug or don’t want to spend time searching through documentation, I ask a code LLM to generate a solution for me. Then I run it and see if it meets my specification. If it doesn’t, I prompt the LLM again or simply edit the code myself. I’m doing less code writing and more code debugging.  We could imagine using AI as a generator for even harder problems, such as developing hypotheses in mathematics or science that we can edit and verify.</p>
            <p>Long story short, while current artificial intelligence doesn’t seem to have the capability to solve P vs. NP, it’s certainly helping us more efficiently solve NP-Hard problems. LLMs not only process large amounts of data at once, but they also embed problem instances into semantically-rich subspaces, in which they can find useful heuristics to difficult problems. I’m curious to continue seeing where AI takes us on the question of P vs. NP and its implications on our computational abilities.</p>
        </div>
    )
}
export default Math9