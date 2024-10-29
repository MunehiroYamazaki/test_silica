'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Star, Check, ArrowRight, Droplet, Feather, Palette, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const problemData = [
  { name: 'ニキビが治らない', value: 30 },
  { name: '肌に合う商品が見つからない', value: 25 },
  { name: '化粧品で肌荒れ', value: 15 },
  { name: 'メイクでニキビ悪化', value: 20 },
  { name: '効果が出ない', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function SilicaPowderLandingComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex justify-center">
      <div className="w-full max-w-[1024px]">
        <header className="px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-blue-900">
            ニキビの原因を根本からブロック！<br />
            透明感あふれる素肌へ導く、シリカパウダー
          </h1>
          <p className="mt-4 text-xl text-center text-blue-700">
            シリカの力で肌トラブルを抑え、健康的な美肌をキープ。<br />ニキビに悩むすべての方におすすめのスキンケアパウダー。
          </p>
        </header>

        <main className="px-4 py-12">
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-center">現状の問題点</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>ニキビが治らず、毎朝鏡を見るのがつらい</li>
                  <li>肌に負担をかけないニキビケア商品が見つからない</li>
                  <li>化粧品でかえって肌荒れを引き起こす</li>
                  <li>毎日のメイクでさらにニキビが悪化する</li>
                  <li>さまざまな製品を試しても効果が出ない</li>
                </ul>
                <p className="mt-4 text-blue-700 font-medium">
                  「ニキビに悩む女性の80％が、スキンケアや化粧品選びに苦労している」という調査結果があります。
                </p>
              </div>
              <div className="h-[400px]">
                <ChartContainer
                  config={{
                    value: {
                      label: "問題の割合",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={problemData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {problemData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-center">シリカパウダーの特徴</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <Droplet className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>皮脂吸収力</CardTitle>
                </CardHeader>
                <CardContent>
                  肌の余分な油分をコントロールし、テカリを防ぎます。
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <Feather className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>ナチュラルな<br />使用感</CardTitle>
                </CardHeader>
                <CardContent>
                  軽い使用感で、透明な仕上がりを実現します。
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4 mx-auto">
                    <Palette className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle>肌トーンの<br />均一化</CardTitle>
                </CardHeader>
                <CardContent>
                  肌のトーンを整え、自然な美しさを引き出します。
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle>メイクの上から<br />使用可能</CardTitle>
                </CardHeader>
                <CardContent>
                  日中のテカリやベタつきを瞬時にリセットできます。
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-center">お客様の声</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>30代女性</CardTitle>
                </CardHeader>
                <CardContent>
                  「これまでの化粧品はニキビを悪化させていましたが、シリカパウダーは全くそんなことがなく、逆に肌が整ってきました。」
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>20代女性</CardTitle>
                </CardHeader>
                <CardContent>
                  「仕事中のメイク直しに使っています。ベタつきがなくなり、ニキビも減って本当に助かっています！」
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-center">プランと価格</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-100 rounded-lg p-6 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">シリカパウダー 30g</h3>
                <p className="text-4xl font-bold mb-1">2,500円</p>
                <p className="text-sm mb-4">通常購入</p>
                <button className="bg-white text-pink-600 font-semibold py-2 px-4 rounded mb-4 hover:bg-pink-50 transition-colors">
                  購入する
                </button>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 2,500円</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 30g</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 送料無料</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 全額返金保証</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> お試し可能</li>
                </ul>
              </div>
              <div className="bg-pink-200 rounded-lg p-6 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">シリカパウダー＋ブラシセット</h3>
                <p className="text-4xl font-bold mb-1">3,500円</p>
                <p className="text-sm mb-4">セット購入</p>
                <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded mb-4 hover:bg-orange-600 transition-colors">
                  Start with Plus
                </button>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 3,500円</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 30g</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 専用ブラシ付き</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 送料無料</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 全額返金保証</li>
                </ul>
              </div>
              <div className="bg-pink-100 rounded-lg p-6 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">定期購入プラン</h3>
                <p className="text-4xl font-bold mb-1">2,250円<span className="text-base font-normal">/月額</span></p>
                <p className="text-sm mb-4">定期購入</p>
                <button className="bg-white text-pink-600 font-semibold py-2 px-4 rounded mb-4 hover:bg-pink-50 transition-colors">
                  定期購入する
                </button>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 毎月1個配送</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 10%オフ</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 送料無料</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> 全額返金保証</li>
                  <li className="flex items-center"><Check size={16} className="mr-2 text-green-500" /> キャンセル可能</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900 text-center">よくある質問</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>シリカパウダーはどのように使用するのがベストですか？</AccordionTrigger>
                <AccordionContent>
                  朝のメイク仕上げや、日中の化粧直しに軽くパウダーをのせるだけで、テカリを防ぎながら肌をケアします。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>敏感肌でも使えますか？</AccordionTrigger>
                
                <AccordionContent>
                  はい、シリカパウダーは低刺激処方のため、敏感肌の方にも安心してご使用いただけます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>ニキビが悪化しませんか？</AccordionTrigger>
                <AccordionContent>
                  シリカパウダーは毛穴を塞がず、余分な皮脂を抑えるので、ニキビが悪化する心配はありません。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>使用感は軽いですか？</AccordionTrigger>
                <AccordionContent>
                  非常に軽い付け心地で、厚塗り感がなく、自然な仕上がりが特徴です。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>定期購入を途中で解約できますか？</AccordionTrigger>
                <AccordionContent>
                  いつでも解約可能です。次回配送の7日前までにお知らせください。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-900 text-center">シリカパウダーで自信の持てる素肌へ</h2>
            <p className="text-xl mb-6 text-blue-700">ニキビに悩む日々を終わらせましょう。</p>
            <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4 text-left">
                <Label htmlFor="name" className="block text-left mb-1">お名前</Label>
                <Input type="text" id="name" placeholder="山田 花子" required />
              </div>
              <div className="mb-4 text-left">
                <Label htmlFor="email" className="block text-left mb-1">メールアドレス</Label>
                <Input type="email" id="email" placeholder="example@example.com" required />
              </div>
              <Button type="submit" className="w-full">
                無料サンプルを申し込む
              </Button>
            </form>
            <p className="mt-4 text-blue-600">初回限定のプレゼント付きキャンペーンもお見逃しなく！</p>
          </section>
        </main>

        <footer className="bg-blue-900 text-white py-8">
          <div className="px-4 text-center">
            <p>&copy; 2024 シリカパウダー. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}