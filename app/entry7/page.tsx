import React from 'react';
import Image from 'next/image';

export default function Entry7() {
  return (
    <div className="flex bg-gray-100 rounded-lg shadow-md">
      <div className="w-1/2 pr-4">
        <div className="max-w-3xl mx-auto p-10">
          <div className="space-y-0">
            <div className="text-2xl font-bold text-gray-900">Towards Ethical AI Regulation in Africa</div>
            <div className="text-gray-700 space-y-4">
              <div>
                <b>Source:</b> <a href="https://cipesa.org/2024/03/towards-ethical-ai-regulation-in-africa/#:~:text=As%20AI%20systems%20make%20decisions,coloniality%2C%20class%20and%20citizenship%E2%80%9D" className="text-blue-600 underline">CIPESA Article Link</a>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <b>Course Topic:</b> This article relates closely to <b>AI Ethics and Regulation</b> within the broader themes of <b>engineering ethics and responsibility</b>.
                </li>
                <li>
                  <b>Summary:</b> The article discusses the ethical and regulatory needs of AI in Africa, highlighting challenges like <b>algorithmic bias, transparency, privacy, and disinformation</b>. It emphasizes collaboration across sectors to develop regulations that safeguard against the risks of AI while fostering innovation. The African Union's approach, with AUDA-NEPAD's White Paper, aims to introduce coherent policy for sustainable and ethical AI development.
                </li>
                <li>
                  <b>Reflection:</b> This article reinforced the importance of a <b>context-specific regulatory approach</b> in engineering ethics, showing that ethical AI frameworks must consider regional needs, values, and vulnerabilities.
                </li>
                <li>
                  The piece relates to course themes like <b>design for justice and equity</b>, emphasizing that ethical AI should address local socioeconomic factors, history, and power dynamics.
                </li>
                <li>
                  It also prompted me to think critically about how <b>engineering ethics</b> must prioritize inclusivity and be wary of reinforcing historical biases. The African framework's emphasis on <b>ethical responsibility and inclusive policy-making</b> provides a valuable model for a balanced, culturally sensitive approach in global AI ethics.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <Image
          src="/portfolio/africa-ai-reg.png"//https://www.nature.com/articles/s41746-023-00965-x
          alt="Entry5 Image"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
}
