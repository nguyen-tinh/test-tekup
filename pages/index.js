import Breadcrum from "../components/Breadcrum";
import Image from "next/image";
import LeatherType from "../components/LeatherType";
import {
  ZoomInIcon,
  RefreshIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import LeatherColor from "../components/LeatherColor";
import LeatherDarkColor from "../components/LeatherDarkColor";

export default function Home() {
  const leatherTypeList = [
    {
      id: 1,
      content: "TUMBLED",
      image:
        "https://s3-alpha-sig.figma.com/img/5261/530d/d903965144e05743021a1f4266aba4d0?Expires=1628467200&Signature=d8r7efWGaPgt5yQ1enqJE4P7t7p1fj7P1FIp4DlDV3~LB3RGCva5xPLWvqUeoCYtqy5tcV9tMVDh-T7HW-yvI5fcSsBtQw3u5bDObByG7EOZC0qNSVhUfRtxq3h6~N5CsD5CHltA5FAb4g-7wtgS7C34hRxNgcHYDJ6AgFEmAM-QBxVxMt~iuPEcdmKnGXEw~iCrPqrsCzDJS9PetvYXEEbzkxCJIQobv~GyrD-lrgbOhEkgQbZwj8p6R207ftODs1Io3HG9oVQlHHXEQXS7tQlEd9F8QTFXXROidENowZjR07SaNfNkt8adDa9osDCi7v56WQZk6tkKtLgM5o45OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 2,
      content: "HELLO",
      image:
        "https://s3-alpha-sig.figma.com/img/7b80/3986/8323256bdffdedc978161a5dd76f0fd6?Expires=1628467200&Signature=HJQMQq4n22WVNmUrMiilN3VnPPJIOO8qAAtL0T7Q5ywFD69isAAYr1Tp19au5UDS4JiZsy4yrJc5rw-nYXBvwqmOz21h08SqrYf3h6~qAhDe~dOlFt2UUE0JskmRESOsF0CrHL3kSauBhVVY6y6lL9hY~71LC5jpbg6XsQl87eFIhyaL~6KrJuka5pLaCWcj4ophyIKO9PhSQkUTGOow-xKgVbdptHYl~ccjN7svkZJv8wsBu2wSti6J5GZnY~z-Ygk7MxtJdICHTwpUkfbhMIKGW160QpUVFEizo1cLBCoi0fvUZ5svPkJkJu1eEzFv1nPjC8WdhYUzeUGkQupaiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 3,
      content: "NAME",
      image:
        "https://s3-alpha-sig.figma.com/img/a0bd/e534/65b682ccc2be9e08cf166c4700d8cd40?Expires=1628467200&Signature=GbLxvi2ZJhKL~lEIhRbUq2BhLJesA28S5kSbVEM9wpmBw6zaQAMfK3ksR62sEUtrKAEpcycUU7laZ12k3xP6T9k~e68ERNc07HMYk0SBodC4zQvENcu0BGqe~3hGw4EvVY9Y~U7sFzo7M5-YsF36Gaxrh~scG3VlRateiRLsRys~He5eaSENeBuV7tLOYE8b2TGeT3rwlkuqRjjK8f3BlMITu8OzuJ0cYhLG8cqLBB0aXKWvyhf3oiVqzodI~yrYMEmYfdfo6fRD0ZKV5o9aqW1yhO25H~FXMeKDh7m0GVXwPiVSLHOH3pq1b3kdxe6WJzN8Hj-yEir4renfzGD5FA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 4,
      content: "I'M PHUOC",
      image:
        "https://s3-alpha-sig.figma.com/img/8f5c/13a4/786a44182cd045da0e8973fa37c60bba?Expires=1628467200&Signature=BHMtzteQhnnNgRi2wdLeq8QTSwe9a83GyZG8GWqzj4F1VmHS0JeA8fdCDSpxX~tEwQ-zMEW3yfUrlp3noDVGNQ3cI5IChxhnv-ZJQ-qMpDGcNO3s7iFNtDgUwaDMsW2CZ47GC6TNB0p63770U9hE~bMke9iAs8eW-HB47Phw2IXiNeaaj3NdDjRYDFp2yy~-qegzNxa7Bu0LL67QkjRoif4fcl8lKjImQX-KoYc2D-zu~B6~RimALaivAbMA79O-JAOPh9aNrAEAfFdFW0rso7oDCYc8tk5OPOCpXf5-kXEt1jNGxeyfriREjZbhodQM6ERE6nP5bPKulZP4Ort5rQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 5,
      content: "FANTASTIC",
      image:
        "https://s3-alpha-sig.figma.com/img/81fb/e0cc/4e6d9f637cc58d765ee071088560e2f1?Expires=1628467200&Signature=ENfSZDuB07LmxDoT~U~EVzSx4RjHCeaop1hlvCTpcljz7dK2uhV~E935tBHIBJIYdcBua~F6oCCQiD9bORzuyPQZMhHhkmpt62l8vKJpax~3FqP6NoRcbaWLYQhpHy01vmNJ~vkmOSbea124h7rncnTCUMLak81JMK8g~756tnRMhmpyJqH6XeeCrppITsIBN0cXxtWFuuSQzAuwcaB6lUCxfPoiW0xdE4Uyw3Obb9iy~ln-TLJ6i6GGqnukiZowjpCxw-QBRz0cFIMYxCQba~7QDqLAIxqDr8XzV2YUcKwGbk1zaEr-glmH-AlcdVtp3AJuq9srUexm59JdCaqqUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 6,
      content: "STAGNATE",
      image:
        "https://s3-alpha-sig.figma.com/img/b33d/9bae/0ab99e8ac7d227273877a64056faa5ed?Expires=1628467200&Signature=YQK9XymPBzbBEm5k1SMqkjUQ0JvGN3rjF6Gt7sqeR9IcJmUnCv2NYac2QZFLG4E~fWSTr-2O5YruyS8PuGoM7RXPM0e89Yqmop8IXdzsrebVRMHmXVE8ee-2T6SWgD0gM3Cb2j2GFhhggTQiE8OdhoaBFCkLNPE~Sd5mcj5HgSJomKZKbmN2rNdRjOUXwaGslgeu-~56mvFL1OJ2~KbgTdqdudi5wO-aYeOBbEDD~XBL5GwsLz5UFsXYMSwzIz-QlxeHrY-viuJ24Ni6FmiEXJX-9FpfTnAxO-ihME3PqshJai71fyyURmYyu7og7-lIRYEgr74ccKIl8Rehao6mNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 7,
      content: "COMPASSION",
      image:
        "https://s3-alpha-sig.figma.com/img/5261/530d/d903965144e05743021a1f4266aba4d0?Expires=1628467200&Signature=d8r7efWGaPgt5yQ1enqJE4P7t7p1fj7P1FIp4DlDV3~LB3RGCva5xPLWvqUeoCYtqy5tcV9tMVDh-T7HW-yvI5fcSsBtQw3u5bDObByG7EOZC0qNSVhUfRtxq3h6~N5CsD5CHltA5FAb4g-7wtgS7C34hRxNgcHYDJ6AgFEmAM-QBxVxMt~iuPEcdmKnGXEw~iCrPqrsCzDJS9PetvYXEEbzkxCJIQobv~GyrD-lrgbOhEkgQbZwj8p6R207ftODs1Io3HG9oVQlHHXEQXS7tQlEd9F8QTFXXROidENowZjR07SaNfNkt8adDa9osDCi7v56WQZk6tkKtLgM5o45OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 8,
      content: "LUXURY",
      image:
        "https://s3-alpha-sig.figma.com/img/7b80/3986/8323256bdffdedc978161a5dd76f0fd6?Expires=1628467200&Signature=HJQMQq4n22WVNmUrMiilN3VnPPJIOO8qAAtL0T7Q5ywFD69isAAYr1Tp19au5UDS4JiZsy4yrJc5rw-nYXBvwqmOz21h08SqrYf3h6~qAhDe~dOlFt2UUE0JskmRESOsF0CrHL3kSauBhVVY6y6lL9hY~71LC5jpbg6XsQl87eFIhyaL~6KrJuka5pLaCWcj4ophyIKO9PhSQkUTGOow-xKgVbdptHYl~ccjN7svkZJv8wsBu2wSti6J5GZnY~z-Ygk7MxtJdICHTwpUkfbhMIKGW160QpUVFEizo1cLBCoi0fvUZ5svPkJkJu1eEzFv1nPjC8WdhYUzeUGkQupaiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ];

  const patternTypeList = [
    {
      id: 1,
      content: "HUMBLE",
      image:
        "https://s3-alpha-sig.figma.com/img/5261/530d/d903965144e05743021a1f4266aba4d0?Expires=1628467200&Signature=d8r7efWGaPgt5yQ1enqJE4P7t7p1fj7P1FIp4DlDV3~LB3RGCva5xPLWvqUeoCYtqy5tcV9tMVDh-T7HW-yvI5fcSsBtQw3u5bDObByG7EOZC0qNSVhUfRtxq3h6~N5CsD5CHltA5FAb4g-7wtgS7C34hRxNgcHYDJ6AgFEmAM-QBxVxMt~iuPEcdmKnGXEw~iCrPqrsCzDJS9PetvYXEEbzkxCJIQobv~GyrD-lrgbOhEkgQbZwj8p6R207ftODs1Io3HG9oVQlHHXEQXS7tQlEd9F8QTFXXROidENowZjR07SaNfNkt8adDa9osDCi7v56WQZk6tkKtLgM5o45OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 2,
      content: "COMPORT",
      image:
        "https://s3-alpha-sig.figma.com/img/7b80/3986/8323256bdffdedc978161a5dd76f0fd6?Expires=1628467200&Signature=HJQMQq4n22WVNmUrMiilN3VnPPJIOO8qAAtL0T7Q5ywFD69isAAYr1Tp19au5UDS4JiZsy4yrJc5rw-nYXBvwqmOz21h08SqrYf3h6~qAhDe~dOlFt2UUE0JskmRESOsF0CrHL3kSauBhVVY6y6lL9hY~71LC5jpbg6XsQl87eFIhyaL~6KrJuka5pLaCWcj4ophyIKO9PhSQkUTGOow-xKgVbdptHYl~ccjN7svkZJv8wsBu2wSti6J5GZnY~z-Ygk7MxtJdICHTwpUkfbhMIKGW160QpUVFEizo1cLBCoi0fvUZ5svPkJkJu1eEzFv1nPjC8WdhYUzeUGkQupaiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 3,
      content: "NAME",
      image:
        "https://s3-alpha-sig.figma.com/img/a0bd/e534/65b682ccc2be9e08cf166c4700d8cd40?Expires=1628467200&Signature=GbLxvi2ZJhKL~lEIhRbUq2BhLJesA28S5kSbVEM9wpmBw6zaQAMfK3ksR62sEUtrKAEpcycUU7laZ12k3xP6T9k~e68ERNc07HMYk0SBodC4zQvENcu0BGqe~3hGw4EvVY9Y~U7sFzo7M5-YsF36Gaxrh~scG3VlRateiRLsRys~He5eaSENeBuV7tLOYE8b2TGeT3rwlkuqRjjK8f3BlMITu8OzuJ0cYhLG8cqLBB0aXKWvyhf3oiVqzodI~yrYMEmYfdfo6fRD0ZKV5o9aqW1yhO25H~FXMeKDh7m0GVXwPiVSLHOH3pq1b3kdxe6WJzN8Hj-yEir4renfzGD5FA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 4,
      content: "I\'M PHUOC",
      image:
        "https://s3-alpha-sig.figma.com/img/8f5c/13a4/786a44182cd045da0e8973fa37c60bba?Expires=1628467200&Signature=BHMtzteQhnnNgRi2wdLeq8QTSwe9a83GyZG8GWqzj4F1VmHS0JeA8fdCDSpxX~tEwQ-zMEW3yfUrlp3noDVGNQ3cI5IChxhnv-ZJQ-qMpDGcNO3s7iFNtDgUwaDMsW2CZ47GC6TNB0p63770U9hE~bMke9iAs8eW-HB47Phw2IXiNeaaj3NdDjRYDFp2yy~-qegzNxa7Bu0LL67QkjRoif4fcl8lKjImQX-KoYc2D-zu~B6~RimALaivAbMA79O-JAOPh9aNrAEAfFdFW0rso7oDCYc8tk5OPOCpXf5-kXEt1jNGxeyfriREjZbhodQM6ERE6nP5bPKulZP4Ort5rQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 5,
      content: "FANTASTIC",
      image:
        "https://s3-alpha-sig.figma.com/img/81fb/e0cc/4e6d9f637cc58d765ee071088560e2f1?Expires=1628467200&Signature=ENfSZDuB07LmxDoT~U~EVzSx4RjHCeaop1hlvCTpcljz7dK2uhV~E935tBHIBJIYdcBua~F6oCCQiD9bORzuyPQZMhHhkmpt62l8vKJpax~3FqP6NoRcbaWLYQhpHy01vmNJ~vkmOSbea124h7rncnTCUMLak81JMK8g~756tnRMhmpyJqH6XeeCrppITsIBN0cXxtWFuuSQzAuwcaB6lUCxfPoiW0xdE4Uyw3Obb9iy~ln-TLJ6i6GGqnukiZowjpCxw-QBRz0cFIMYxCQba~7QDqLAIxqDr8XzV2YUcKwGbk1zaEr-glmH-AlcdVtp3AJuq9srUexm59JdCaqqUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 4,
      content: "STAGNATE",
      image:
        "https://s3-alpha-sig.figma.com/img/b33d/9bae/0ab99e8ac7d227273877a64056faa5ed?Expires=1628467200&Signature=YQK9XymPBzbBEm5k1SMqkjUQ0JvGN3rjF6Gt7sqeR9IcJmUnCv2NYac2QZFLG4E~fWSTr-2O5YruyS8PuGoM7RXPM0e89Yqmop8IXdzsrebVRMHmXVE8ee-2T6SWgD0gM3Cb2j2GFhhggTQiE8OdhoaBFCkLNPE~Sd5mcj5HgSJomKZKbmN2rNdRjOUXwaGslgeu-~56mvFL1OJ2~KbgTdqdudi5wO-aYeOBbEDD~XBL5GwsLz5UFsXYMSwzIz-QlxeHrY-viuJ24Ni6FmiEXJX-9FpfTnAxO-ihME3PqshJai71fyyURmYyu7og7-lIRYEgr74ccKIl8Rehao6mNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ]

  return (
    <div className="container mx-auto">
      <Breadcrum />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        {/* left */}
        <div className="text-primary">
          <h1 className="font-bold text-2xl text-center sm:text-left">ConVertible Mini Merinal</h1>
          <div className="flex items-center justify-center relative bg-[#FAFAFA] mt-8 rounded-md">
            <Image
              className="product-detail__img"
              src="https://s3-alpha-sig.figma.com/img/8659/f548/876e47d2c542dd8f1f2ada71fe27cfa1?Expires=1628467200&Signature=PMLAa-oxilbQRvP1H6BOkUEME6T3lWmAyZzgxDSfmc3lFWoBuax5-t7ykgWDxjcZByGEnUzszad7bNr2Jg67F8~cchvfGDQgtS7xofDw-G2wFeoa4lpuFcjjmyDgGzOH4L0QEpRf89~ylazfhR0ZPtNo3UTuWNt7YjzT-ysGRxctBCjfVfaJXV2Nq5M-zeJEbkDEXKmjYfxopLlQXyyJSF6nXAeWfvr07DLucA9P5IeFZrkQJhRF0IQwVMLjdtKdhzgJXBrLLu0maRbWyy6BxD0P8snmRC1eAlKUB~d4e6MrhqjuLZZcbzyMz2RYckN1nZKK6ArR82Q0358zQqAyoA__&amp;Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width={577}
              height={577}
              objectFit="contain"
            />
            <div className="absolute left-0 bottom-0 flex space-x-4 p-4">
              <ZoomInIcon className="h-8 text-grayColor cursor-pointer" />
              <RefreshIcon className="h-8 text-grayColor cursor-pointer" />
            </div>
          </div>

          <div className="mt-8 space-x-4 items-center flex cursor-pointer justify-center sm:justify-start">
            <h4 className="text-lg text-primary font-semibold">
              PRODUCT DETAILS
            </h4>
            <ChevronDownIcon className="h-6" />
          </div>
        </div>

        {/* right */}
        <div className='max-w-md sm:max-w-xs lg:max-w-md items-center'>
          <div className="ml-3 md:ml-0 flex max-w-sm px-3 py-1 justify-between items-center border-2 border-primary border-solid">
            <p className="pl-1">FLAP</p>
            <ChevronDownIcon className="h-6 cursor-pointer" />
          </div>

          <div className="mt-8">
            <h1 className="text-center sm:text-left font-bold text-xl text-primary">
              Select Leather Type
            </h1>
            <p className="text-center sm:text-left font-light text-sm text-primary pt-1 mb-4">
              TUMBLED LEATHER $100
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
              {leatherTypeList.map(({ id, content, image }) => (
                <LeatherType key={id} content={content} image={image} />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-center sm:text-left font-bold text-xl text-primary">
              Select Leather Color
            </h1>

            {/* color */}
            <div className="my-4 flex overflow-x-scroll scrollbar-hide">
                <LeatherColor />
            </div>

            {/* darkcolor */}
            <div className='my-4 flex overflow-x-scroll scrollbar-hide'>
              <LeatherDarkColor />
            </div>
          </div>

          <div className='mt-8'>
            <h1 className="text-center sm:text-left font-bold text-xl text-primary">
              Select Leather Type
            </h1>
            <p className="text-center sm:text-left font-light text-sm text-primary pt-1 mb-4">
              HUMBLE $300
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
              {patternTypeList.map(({ id, content, image }) => (
                <LeatherType key={id} content={content} image={image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
