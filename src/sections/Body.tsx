import { motion } from 'framer-motion';

const Body: React.FC = () => {
  return (
    <div>
        <div>
            <motion.div
            animate='animate'>
                <h1> — WAIT, WHAT THE HACK IS A HACKATHON?</h1>
            </motion.div>
        </div>
    </div>
    );
};

export default Body;