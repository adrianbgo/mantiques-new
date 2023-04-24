import styles from "./Testimonials.module.css";

type Testimonial = {
  name: string;
  quote: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className={styles.testimonials}>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.card} key={index}>
            <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
            <p className={styles.name}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
