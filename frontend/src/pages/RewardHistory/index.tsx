import { useQuery } from '@tanstack/react-query';
import { MyRewardRes } from '../../types/api';
import { getMyRewards } from '../../api/get';
import { Reward } from '../../types';
export const useRewardQuery = (used: boolean) => {
  const result = useQuery<MyRewardRes>(['myRewards', used], {
    queryFn: () => getMyRewards(used),
  });

  return result;
};

export const concatUsedAtDate = (rewards: Reward[]) => {
  return rewards.map((reward) => {
    if (!reward.usedAt) return reward;
    const [year, month, day] = reward.usedAt.split(':');
    return { ...reward, usedAt: `${year}${month}${day}` };
  });
};

// TODO: 타입 구체화
export const transformRewardsByUsedAt = (rewards: Reward[]) => {
  const result: any = [];

  const copiedRewards = concatUsedAtDate(rewards);

  copiedRewards.sort((a, b) => {
    if (!a.usedAt || !b.usedAt) return 0;
    return a.usedAt.localeCompare(b.usedAt);
  });

  copiedRewards.forEach((reward) => {
    if (!reward.usedAt) return;
    const usedDate = reward.usedAt;
    const existingEntry = result.find((entry) => entry[usedDate]);

    if (existingEntry) {
      existingEntry[reward.usedAt].push({
        id: reward.id,
        cafeName: reward.cafeName,
        rewardName: reward.rewardName,
        createdAt: reward.createdAt,
        usedAt: reward.usedAt,
      });
    } else {
      const newEntry = {
        key: reward.usedAt,
        [reward.usedAt]: [
          {
            id: reward.id,
            cafeName: reward.cafeName,
            rewardName: reward.rewardName,
            createdAt: reward.createdAt,
            usedAt: reward.usedAt,
          },
        ],
      };
      result.push(newEntry);
    }
  });

  return result;
};

