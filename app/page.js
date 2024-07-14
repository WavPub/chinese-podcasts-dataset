'use client';
import React, { useState, useEffect, useRef } from 'react';
import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Mic, Music, Clock, FileText, CheckCircle, Star, Headphones, Radio,BarChart as BC,AudioLines,Drama,Device  } from 'lucide-react';
import { Database } from 'lucide-react';
import Image from 'next/image'



const audioLengthData = [
  { length: '0-5s', count: 699 },
  { length: '5-10s', count: 387 },
  { length: '10-20s', count: 255 },
  { length: '20-30s', count: 118 },
  { length: '30-40s', count: 119 },
  { length: '40s+', count: 28 },
];

const Feature = ({ Icon, title, description }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <Icon className="w-12 h-12 text-blue-500 mb-2" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
);

const DataPoint = ({ Icon, title, value }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <Icon className="w-12 h-12 text-blue-500 mb-2" />
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
);


export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);



  const cards = [
    { title: "津津乐道", img: "/podcast/jinjinledao.png" },
    { title: "不叁不肆", img: "/podcast/busanbusi.png" },
    { title: "科技乱炖", img: "/podcast/kejiluandun.png" },
    { title: "津津有味", img: "/podcast/jinjinyouwei.png" },
    { title: "记者下班", img: "/podcast/jzxb.png" },
    { title: "拼娃时代", img: "/podcast/pwsd.jpg" },
    { title: "品质生活", img: "/podcast/pzsh.jpg" },
    { title: "厂长来了", img: "/podcast/czll.jpg" },
    { title: "安全出口FM", img: "/podcast/exitfm.jpg" },
    { title: "Web Worker", img: "/podcast/webworker.png" },

  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovering) return;

    let animationId;

    const scroll = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + scrollDirection;
        const containerWidth = scrollContainer.clientWidth;
        const totalWidth = scrollContainer.scrollWidth;
        const maxScroll = totalWidth - containerWidth;

        if (newPosition >= maxScroll) {
          setScrollDirection(-1); // Change direction to left
          return maxScroll;
        } else if (newPosition <= 0) {
          setScrollDirection(1); // Change direction to right
          return 0;
        } else {
          scrollContainer.scrollLeft = newPosition;
          return newPosition;
        }
      });

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering, scrollDirection, cards]);


  return (
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Chinese Podcasts Dataset</h1>
            <h1 className="text-3xl font-bold mb-4">中文播客语音数据集</h1>
            <p className="text-xl">推进普通话自然语音生成技术</p>
          </div>
        </header>

        <main className="container mx-auto py-12 px-4">
          <section className="mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">背景</h2>
              <p className="text-gray-700 leading-relaxed font-serif">
                最近的两年中,语⾳⽣成研究在各种⽣成模型和⼤规模训练数据的推动下取得了显著进展。像Bark、XTTS、ChatTTS、fish-speech等模型通过⼤幅扩展数据集和模型规模,在(零样本)语⾳⽣成⽅⾯取得了⻓⾜进步,在学术数据集上实现了⾼相似度、⾼⾳质和⾼⾃然度。然⽽,⽣成的语⾳仍然⽆法完全模仿现实世界中⼈类的⾃然语⾳。
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 font-serif">
                这⼀局限性的主要原因之⼀是当前的语⾳⽣成模型主要基于有声读物等正式朗读⻛格的语⾳数据集进⾏训练。然⽽,现实中的⼈类语⾳,尤其是在⽇常对话中,很少遵循这种标准化的模式。相反,它展现出更多样化和⾃发的说话⻛格,包括呼吸、停顿、重复、语速变化和情感变化等特征。因此,亟需⼀个包含更多样化语⾳⻛格的新数据集,以推动该领域向⽣成更⾃然、更接近⼈类的语⾳⽅向发展。
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
               <b className="font-bold">我们发现由于高质量语音数据集的稀缺，许多模型通过爬取影视网站的资源来增加数据的多样性。然而，这些数据的质量无法得到保障，并且存在潜在的法律风险。</b>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <span className="font-serif">鉴于此，我们构建了一个</span><b className="font-bold">已获得授权用于AI模型训练</b><span className="font-serif">的中文播客数据集。该数据集依托中文播客领域最大的独立第三方内容托管平台<a href="https://wav.pub">声湃®</a>的数据和主播授权，为研究人员提供了一个多样化、高质量的中文播客资源。</span>
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">愿景</h2>
              <p className="text-lg text-blue-800 leading-relaxed">
                这个数据集的创建，承载着我们对语音生成技术未来的美好期望。我们希望通过这一多样化、高质量的中文播客数据集，推动语音生成技术向更自然、更贴近人类真实对话的方向发展。我们坚信，研究人员会利用这个数据集，开发出更加自然和富有表现力的语音合成模型，从而在各种应用场景中带来更出色的用户体验。
              
              </p>
              <p className="text-lg text-blue-800 leading-relaxed">
                
                <br/>作为创作者服务平台，我们深刻理解创作者在AI时代的诉求和困扰。我们怀着对创作者的尊重与感激之情，仅在获得内容创作者授权的前提下提供数据，并通过费用分成和AI服务转化等形式，坚持与创作者分享AI时代的红利。
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">公开评估数据集概览</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6 text-center">
                该数据集是对公众开放的最小数据集，以此来展示数据的多样性和高质量，以及为研究人员提供一个评估数据集的机会。本数据集可申请免费下载，但需遵守数据使用协议。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DataPoint Icon={Radio} title="授权播客数量" value="4"/>
                <DataPoint Icon={Headphones} title="节目期数" value="16"/>
                <DataPoint Icon={Clock} title="总时长" value="4.66小时"/>
                <DataPoint Icon={Database} title="条目数" value="1606对"/>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">全量数据集概览</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6 text-center">
              全量数据集可在申请并付费后使用。我们尊重内容创作者的权利，您支付的费用中有一部分将会分配给内容创作者。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DataPoint Icon={Radio} title="授权播客数量" value="200+"/>
                <DataPoint Icon={Headphones} title="节目期数" value="26000+"/>
                <DataPoint Icon={Clock} title="总时长" value="150万小时+"/>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">主要特点</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Feature
                  Icon={Mic}
                  title="多样化数据来源"
                  description="包含各种类型的播客节目,涵盖日常对话、专业讨论、故事叙述等多种场景。"
              />
              <Feature
                  Icon={Music}
                  title="自然语音特征"
                  description="保留了真实人类语音的自然特征，如呼吸声、停顿、语速变化等。"
              />
              <Feature
                  Icon={Drama}
                  title="情感丰富"
                  description="包含各种情感表达,从平静叙述到激烈讨论,反映了真实对话中的情感变化。"
              />
              <Feature
                  Icon={Star}
                  title="高质量录音"
                  description="使用专业设备录音，并在经过声学处理的录音室中录音，确保最小的环境干扰。"
              />
              <Feature
                  Icon={BC}
                  title="高质量音频"
                  description="我们的音频直接来自节目制作方的原始母带版本。"
              />
              <Feature
                  Icon={AudioLines}
                  title="高质量处理"
                  description="我们开发了一套高效的预处理流程,能够有效去除背景噪音、音乐,并提取单一说话人的语音片段。"
              />
              <Feature
                  Icon={Clock}
                  title="可观的规模"
                  description="总时长超万小时，持续邀请更多播客加入，为大规模模型训练提供充足数据支持。"
              />
              <Feature
                  Icon={FileText}
                  title="完善的标注"
                  description="每个音频片段都配有准确的文本转录，便于模型训练和评估。"
              />
              <Feature
                  Icon={CheckCircle}
                  title="清晰的授权"
                  description="所有数据均获得合法授权，避免了版权问题。"
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">公开评估数据集音频长度分布</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={audioLengthData}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="length"/>
                  <YAxis/>
                  <Tooltip/>
                  <Bar dataKey="count" fill="#3B82F6"/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">公开评估数据集质量</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">音频质量 (DNS-MOS P.835 OVRL)</h3>
              <div className="overflow-x-auto">
                <table className="w-full mb-6">
                  <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">指标</th>
                    <th className="px-4 py-2 text-left">数值</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="border px-4 py-2">最小值</td>
                    <td className="border px-4 py-2">1.25</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">最大值</td>
                    <td className="border px-4 py-2">4.69</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">平均值±标准差</td>
                    <td className="border px-4 py-2">3.18±0.79</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="text-xl font-semibold mb-4">ASR识别质量</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">指标</th>
                    <th className="px-4 py-2 text-left">数值</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="border px-4 py-2">字符错误率 (CER)</td>
                    <td className="border px-4 py-2">1.23%</td>
                  </tr>
                  </tbody>
                </table>
                <p className="pt-2">注：字符错误率 (CER) 是通过抽取前100条音频，人工转译文本与原始转译文本进行计算得到。</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">已授权的播客</h2>


            <div className="relative w-full overflow-hidden">
              <div
                  className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div
                  className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
              <div
                  ref={scrollRef}
                  className="flex overflow-x-hidden"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
              >
                {[...cards, ...cards, ...cards].map((card, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-64 h-72 bg-white shadow-lg rounded-lg m-4 p-4 transition-transform hover:scale-105"
                    >
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <Image src={card.img} alt={card.title} width={400}
                             height={400}></Image>
                    </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                  className="bg-purple-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
                <a href="https://om2lztg2mssownic.mikecrm.com/4178Ebv">您是播客创作者？点此授权数据，获得收益！</a>
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8 text-center">开始使用</h2>
            <div className="text-center">
              <p className="mb-4">准备好推进您的语音生成研究了吗？</p>
              <button
                  className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                <a href="https://om2lztg2mssownic.mikecrm.com/OBaFAgh">下载数据集</a>
              </button>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 <a target="_blank" href="https://wav.pub/">声湃®</a> 保留所有权利</p>
            <p>本项目由 <a target="_blank" href="https://github.com/GanymedeNil">GanymedeNil</a> 驱动</p>
          </div>
        </footer>
      </div>
    );
  }
