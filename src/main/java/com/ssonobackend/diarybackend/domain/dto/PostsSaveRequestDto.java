package com.ssonobackend.diarybackend.domain.dto;

import com.ssonobackend.diarybackend.domain.Journal;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data

public class PostsSaveRequestDto {
    private String date;
    private String content;
    private String emotion;


    @Builder
    public PostsSaveRequestDto(String content, String emotion, String data) {
        this.content = content;
        this.emotion = emotion;
        this.date = date;

    }

    public Journal toEntity() {
        return Journal.builder()
                .date(date)
                .emotion(emotion)
                .contents(content)
                .build();
    }
}
