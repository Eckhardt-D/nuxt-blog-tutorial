import Vue from "vue";

const fetch = require("node-fetch");

export const state = () => ({
  posts: [],
});

export const mutations = {
  SET_POSTS: (state, posts) => {
    state.posts = posts;
  },
  ADD_POST: (state, post) => {
    state.posts = [...state.posts, post];
  },
  REMOVE_POST: (state, id) => {
    state.posts = state.posts.filter((post) => post.id !== id);
  },
  EDIT_POST: (state, payload) => {
    const index = state.posts.findIndex((post) => post.id === payload.id);
    Vue.set(posts, index, payload);
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await fetch("/api/v1/posts");
    const posts = await response.json();
    return commit("SET_POSTS", posts);
  },
  async addPost({ commit }, payload) {
    const response = await fetch(`/api/v1/create`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const created = await response.json();
    return commit("ADD_POST", created);
  },
  async deletePost({ commit }, id) {
    const response = await fetch(`/api/v1/create`, {
      method: "post",
      headers: {
        "Content-Type": "text/plain",
      },
      body: id,
    });

    if (response.ok) {
      return commit("REMOVE_POST", id);
    }
  },
  async editPost({ commit }, payload) {
    const response = await fetch(`/api/v1/create`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const edited = response.json();
    return commit("EDIT_POST", edited);
  },
};
