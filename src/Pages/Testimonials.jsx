import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shakil Talukder",
      role: "Programming Mentor",
      feedback:
        "Mohibur is a highly dedicated developer. He quickly grasped complex concepts in MERN Stack and delivered projects with excellent quality.",
      image:
        "https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/542091978_122099413803001560_6884597544090672553_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KrVytPyW7vgQ7kNvwHPMS36&_nc_oc=Adncux-FZV3OGbFlcPraX8uJj7oHEfPhAKwbxf_AtCZu05TA5fqRpMJktD2EJq9ULNU&_nc_zt=23&_nc_ht=scontent.fdac11-2.fna&_nc_gid=xW8Q9hujcpEgkXpU6Gf4Qw&oh=00_AfkJGZ4LWLoM001WVtgmslTQzwuRKhsSoUmFSJH2gDwDsA&oe=69382E97",
    },
    {
      name: "Talha Tarique",
      role: "Course Instructor",
      feedback:
        "Mohibur consistently shows attention to detail and writes clean, maintainable code. He is a fast learner and a reliable developer.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQG5s3ECgtbvaA/profile-displayphoto-crop_800_800/B56ZoDPEGHJ4AI-/0/1760990883348?e=1766620800&v=beta&t=i-d9wTzquwqORVJN6OZ-GRDn45jlDMmz-VZArDICmoE",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Testimonials
        </h2>

        <div className=" grid md:grid-cols-2 gap-3">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <img
                src={test.image}
                alt={test.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-gray-700 mb-4">"{test.feedback}"</p>
              <h3 className="text-xl font-semibold text-gray-800">
                {test.name}
              </h3>
              <p className="text-gray-500 text-sm">{test.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
