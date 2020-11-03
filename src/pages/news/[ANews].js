import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NewsContainter from "../../Components/ANewsContainer";
import Header from "../../Components/Header/";
import GettingPosts from "../../Functions/FirebaseFunctions/GettingPosts";
const theFunc = (props) => {
  const body = `<p>NASHVILLE, Tenn. — It was probably as normal as things could get this election cycle.<p><br><p>After the last faceoff turned into a name-calling shouting match, Thursday night's presidential debate, moderated by NBC News correspondent Kristen Welker, resembled a much more traditional matchup and provided one the clearest contrasts yet between President Donald Trump and his Democratic opponent, former Vice President Joe Biden, on everything from race to the environment.<p><br><p>While Trump went into the final debate signaling that he was looking for theatrics — baselessly accusing Welker of being biased and bringing as his debate guest a former business partner of Biden's son — the candidates stuck mostly to the topics at hand and allowed each other their allotted time to speak.<p><br><p>Trump was able to land many of the attacks his advisers had hoped he'd use against Biden during the first debate — and Biden came prepared with counterpunches while making a case for what he'd do with four years as president.<p><br><p>Here are four key takeaways:<p><br><p>After Trump refused to follow the agreed-upon rule of letting each candidate have two minutes to respond to questions throughout their first faceoff, frequently breaking into Biden's responses, the Commission on Presidential Debates threatened in advance of the event Thursday night to cut off the microphone of any candidate trying to interrupt the other during this go-around.<p><br><p>Trump had called the plan unfair and suggested that he would keep talking even if his mic were muted. But in the end, he may have benefited from the restraint the threat provided, coming off less like a bully than he did during the last debate.<p><br><p>Trump's advisers had also urged him to give Biden more time to speak, predicting that Biden would make a gaffe or fumble a response, and Trump seemed to heed the advice. But Biden didn't make the sort of disqualifying error Trump and his allies have been counting on.<p><br><p>While Trump gave a stronger performance than he did in the previous debate, many of his answers looked backward rather than forward, a tendency his advisers have urged him to avoid. Unlike in 2016, when Trump had a clear pitch to the American people about what he would do if elected — build the wall, drain the swamp, bring back jobs — he has failed to crystallize a second-term agenda into any similarly succinct and clear message.<p><br><p>Trump repeatedly returned to defending his actions over the last four years and complaining about how he had been mistreated — playing the role of the victim at times, rather than that of a defender of the American people. He blamed people "deep inside the IRS" for auditing his taxes and, unprompted, complained about special counsel Robert Mueller's investigation into Russian interference in the 2016 election.<p><br><p>When asked what he would do to guide the nation through the next phase of the coronavirus pandemic, Trump spent most of his time touting what he had done, avoiding the opportunity to talk about a plan going forward as case numbers spike and claiming that a vaccine is coming in just a few weeks, even though his own health officials have said it wouldn't be widely available until well into next year.<p><br><p>Biden came with more prepared talking points about his plans, from heavily encouraging mask-wearing to providing more subsidies for alternative energy sources and less for oil and gas.<p><br><p>Advisers have said that after four years in office, it's likely that there's little Trump can do to change voters' minds about himself. But they have been looking for the chance to change minds about Biden, and Thursday night was their best — and most likely their final — opportunity to do so.<p><br><p>Trump came ready to lay into Biden over his son's business dealings in the prime-time event, accusing Biden and his family of having gotten rich off the vice presidency. He said they were "like a vacuum cleaner — they're sucking up money."<p><br><p>But Biden came prepared and looked to turn the issue back on Trump, rattling off reports of Trump's questionable business dealings and hammering him over his decision not to release his tax returns. Biden said the reports about his son's business dealings were Russian disinformation.<p><br><p>Trump didn't stick to corruption claims; he also repeatedly painted Biden as a career politician who had failed to get anything done during his decades in Washington, repeatedly asking him why he hadn't accomplished during the Obama administration.<p><br><p>"You were vice president along with Obama as your president, your leader, for eight years. Why didn't you get it done?" Trump asked Biden about criminal justice reform. "You had eight years to get it done. Now you're saying you're going to get it done, because you're all talk and no action, Joe."<p><br><p>Biden mostly avoided taking the bait and repeatedly swatted down the attacks with a brief "Not true."<p><br><p>With Biden consistently leading in virtually every battleground state, it was up to Trump to change the dynamics of the race. While he had a stronger performance than he did in the last debate, he stuck to familiar talking points about everything from the coronavirus to race — areas in which voters already disapprove of his performance.<p><br><p>Democratic strategists said going in that Biden didn't need to change minds — he just needed to get through the night without making any disqualifying errors, which he avoided.<p><br><p>With at least 42 million ballots having already been cast and only a small fraction of voters saying their minds could be changed, any effect on the election could be minimal. Still, with Trump and Biden running neck and neck in a number of key states, a boost on the margins could be all that's needed to tip the scales.<p><br>`;
  const news = props.data;
  if (news !== null) {
    if (news) {
      return (
        <>
          <Header
            info={{
              type: "anews",
              title: news.data.catagory,
            }}
          ></Header>
          <div id="sil-sora">
            <NewsContainter type={2}></NewsContainter>
          </div>
        </>
      );
    } else {
      return <h1> render not found page</h1>;
    }
  } else {
    return <h1>Loading...</h1>;
  }
};

export async function getServerSideProps(context) {
  const postName = context.query.ANews;
  const posts = await GettingPosts();
  var result = null;
  if (posts) {
    posts.map((post) => {
      if (post.data.link === postName) {
        result = post;
      }
    });
    if (result === null) {
      result = false;
    }
  }
  result = JSON.parse(JSON.stringify(result));
  return {
    props: {
      data: result,
    },
  };
}

export default theFunc;
