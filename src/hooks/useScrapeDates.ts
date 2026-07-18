import axios from "axios";
import * as cheerio from "cheerio";
import {SHOWS_SITE} from "@/pages/content.ts";
import {useEffect, useState} from "react";
import type {ShowEvent} from "@/types/show-event.ts";

export const useScrapeDates = () => {

  const [events, setEvents] = useState<ShowEvent[]>([]);

  const scrape = async () => {
    const { data: html } = await axios.get(SHOWS_SITE);
    const $ = cheerio.load(html);
    const events = $("#events > a").map((_, el): ShowEvent => {
      const link = $(el).attr("href") ?? SHOWS_SITE;
      const date = $(el).find(".date").text().trim();
      const hour = $(el).find(".single-light").text().trim();
      const location = $(el).find(".single-place-string").text().trim();

      return {date, hour, location, link};
    }).get();

    setEvents(events)
  }

  useEffect(() => {
    scrape()
  }, []);

  return events
}