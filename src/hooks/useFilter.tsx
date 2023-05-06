import { useRecoilState, useRecoilValue } from "recoil";
import {
  SearchProjectAtom,
  initialSearch,
} from "src/Recoil/Atoms/SearchProjectAtom";
import { relevantProjects, allProjects } from "src/utils/textsUtils";

import { IProject } from "src/Interfaces";
import { useState } from "react";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";

//
const useFilter = () => {
  const l = useRecoilValue(LanguageAtom);
  const [projects, setProjects] = useRecoilState(SearchProjectAtom);
  const [newest, setNewest] = useState(false);

  const filterProjects = (
    value: string = projects.searched,
    projectArray: IProject[] = allProjects
  ) => {
    const filteredProjects = projectArray.filter((project) => {
      const {
        title,
        tags,
        backgroundColor,
        year,
        category,
        invisibleTags,
        madeFor,
        description,
      } = project;
      const tagsString = tags.join(" ");
      const invisibleTagsString = invisibleTags ? invisibleTags.join(" ") : "";
      const madeForString = madeFor ? Object.values(madeFor).join(" ") : "";
      const plainProject = `${title} ${tagsString} ${backgroundColor} ${year} ${category} ${invisibleTagsString} ${madeForString} ${description}`;

      const plainValue = value.toLowerCase();
      return plainProject.toLowerCase().includes(plainValue);
    });
    setProjects({
      ...projects,
      searched: value,
      toShow: filteredProjects,
    });
  };
  const updateSearched = (value: string) => {
    setProjects({
      ...projects,
      searched: value,
    });
  };
  const resetShowingListToAll = () => {
    setProjects({
      ...projects,
      toShow: allProjects,
    });
  };
  const resetShowingListToRelevant = () => {
    setProjects({
      ...projects,
      toShow: relevantProjects,
    });
  };
  const resetSearch = () => {
    setProjects(initialSearch);
  };
  const resetAll = () => {
    resetShowingListToRelevant();
    resetSearch();
  };
  const changeOrder = () => {
    if (!newest) {
      const newOrder = [...projects.toShow].sort((a, b) => a.year - b.year);
      setProjects({
        ...projects,
        toShow: newOrder,
      });
    } else {
      const newOrder = [...projects.toShow].sort((a, b) => b.year - a.year);
      setProjects({
        ...projects,
        toShow: newOrder,
      });
    }
    setNewest(!newest);
  };
  const onlyShowCategory = (category: string) => {
    console.log(projects);
    // we need to check if the user is already filtering by web
    // if so, we need to reset the filter
    const allCategoriesEnglish = projects.toShow.map(
      (project) => project.category.en
    );
    // if all the categories are web, we need to reset the filter
    const allCategoriesAreWeb = allCategoriesEnglish.every(
      (projectCategory) => projectCategory === category
    );

    if (allCategoriesAreWeb) {
      resetSearch();
      return;
    }
    const filteredProjects = allProjects.filter((project) => {
      const categoryOfProject = getTextByLang(l.code, project.category);
      return categoryOfProject === category;
    });
    setProjects({
      ...projects,
      filteredCategory: category,
      toShow: filteredProjects,
    });
  };
  const setAscending = () => {
    setProjects({
      ...projects,
      ascending: true,
      toShow: relevantProjects,
    });
  };
  const setDescending = () => {
    setProjects({
      ...projects,
      ascending: false,
      toShow: relevantProjects.reverse(),
    });
  };

  const toggleAscending = () => {
    projects.ascending ? setDescending() : setAscending();
  };

  return {
    projects,
    setProjects,
    filterProjects,
    resetShowingListToAll,
    resetShowingListToRelevant,
    resetSearch,
    resetAll,
    updateSearched,
    onlyShowCategory,
    changeOrder,
    toggleAscending,
  };
};

export default useFilter;
